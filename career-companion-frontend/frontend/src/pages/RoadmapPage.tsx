import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface RoadmapStep {
    step: string;
    description?: string;
    resources?: string[];
}

interface RoadmapData {
    skill: string;
    steps: RoadmapStep[];
}

const client = axios.create({
    baseURL: 'https://chatapi.akash.network/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-p6Yk2DbUav52gtBe1WDAZw' // Replace with your actual API key
    }
});

const RoadmapPage: React.FC = () => {
    const { skill: skillParam } = useParams<{ skill: string }>();
    const [skill, setSkill] = useState<string>(skillParam || '');
    const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (skill) {
            fetchRoadmap(skill);
        }
    }, [skill]);

    const fetchRoadmap = async (currentSkill: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await client.post('/chat/completions', {
                model: "Meta-Llama-3-1-8B-Instruct-FP8",
                messages: [
                    {
                        role: "user",
                        content: `Generate a detailed career roadmap for the skill: "${currentSkill}".

The roadmap should be structured as a JSON object with the following format:

{
  "skill": "${currentSkill}",
  "steps": [
    {
      "step": "Name of the first step (e.g., Fundamentals)",
      "description": "A brief description of what this step entails.",
      "resources": ["Resource 1 for this step", "Resource 2", ...]
    },
    {
      "step": "Name of the second step",
      "description": "Description of the second step.",
      "resources": ["Resource A", "Resource B", ...]
    },
    // ... more steps as needed
  ]
}

Please ensure that:
- The steps are logical and sequential for learning "${currentSkill}".
- Each step has a clear and concise name.
- The description provides a helpful overview of the step's content.
- The resources are relevant and helpful for learning the topics within that step. Aim for at least two resources per step, if applicable.
- The entire response is a valid JSON object.
- BUT, Everything should be in plain text. NO FORMATTING.
`,
                    },
                ],
            });

            if (response.data && response.data.choices && response.data.choices.length > 0) {
                const content = response.data.choices[0].message.content;
                try {
                    const parsedData: RoadmapData = JSON.parse(content);
                    setRoadmapData(parsedData);
                } catch (parseError) {
                    setError('Failed to parse roadmap data from the API response.');
                    console.error('Error parsing JSON:', parseError);
                    console.error('Raw API Response:', content); // Log the raw response for debugging
                }
            } else {
                setError('Received an unexpected response format from the API.');
                console.error('Unexpected API Response:', response.data);
            }
        } catch (error: any) {
            setError('Failed to fetch roadmap data.');
            console.error('Error fetching roadmap:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSkill(event.target.value);
    };

    const handleSearch = () => {
        if (skill) {
            fetchRoadmap(skill);
        }
    };

    return (
        <div className="p-6 font-sans">
            <h1 className="text-3xl font-semibold mb-4 text-blue-700">
                {roadmapData ? `Roadmap for ${roadmapData.skill}` : 'Career Roadmap'}
            </h1>

            <div className="flex mb-6">
                <input
                    type="text"
                    placeholder="Enter a skill (e.g., Web Development, Data Science)"
                    value={skill}
                    onChange={handleSkillChange}
                    className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? 'Loading...' : 'Get Roadmap'}
                </button>
            </div>

            {loading && <p className="mt-2 italic text-gray-500">Loading roadmap...</p>}
            {error && <p className="mt-2 text-red-500">{error}</p>}

            {roadmapData && (
                <div className="mt-8">
                    <ul className="relative border-l-2 border-blue-500">
                        {roadmapData.steps.map((stepItem, index) => (
                            <li key={index} className="mb-6 ml-6">
                                <span
                                    className="absolute top-0 left-[-13px] w-6 h-6 bg-blue-500 rounded-full shadow flex items-center justify-center"
                                >
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                </span>
                                <div className="bg-white rounded-md shadow-md p-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{stepItem.step}</h3>
                                    {stepItem.description && <p className="text-gray-700 mb-3">{stepItem.description}</p>}
                                    {stepItem.resources && stepItem.resources.length > 0 && (
                                        <div className="mt-2">
                                            <h4 className="text-lg font-semibold text-gray-600 mb-1">Resources:</h4>
                                            <ul className="list-disc pl-5 text-gray-700">
                                                {stepItem.resources.map((resource, idx) => (
                                                    <li key={idx}>{resource}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RoadmapPage;

