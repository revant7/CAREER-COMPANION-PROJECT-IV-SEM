// src/components/QuestionnaireForm.tsx
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

type FormData = {
    fullName: string;
    email: string;
    ageGroup: string;
    currentStatus: string;
    currentStatusDetail?: string; // For additional details based on current status
    dreamCareer: string;
    interests: string[];
    skills: string[];
    learningTime: string;
    priorExperience: string;
    priorExperienceDetail?: string; // For additional details based on prior experience
    learningStyle: string[];
    aiMentorship: string;
    careerChallenges: string;
    toolsToMaster: string;
    jobRecommendations: string;
};

const QuestionnaireForm = () => {
    const { register, handleSubmit, control } = useForm<FormData>();
    const [step, setStep] = useState(1);

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Send data to backend API
        fetch("http://localhost:8000/api/questionnaire/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 relative z-10">
            {step === 1 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Basic Information</h2>
                    <input
                        {...register("fullName", { required: true })}
                        placeholder="Full Name"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                    <select {...register("ageGroup", { required: true })} className="w-full p-2 border rounded">
                        <option value="">Select Age Group</option>
                        <option value="Under 16">Under 16 (School Student)</option>
                        <option value="16-18">16-18 (High School Student)</option>
                        <option value="19-22">19-22 (College Student)</option>
                        <option value="23-25">23-25 (Fresher)</option>
                        <option value="26+">26+ (Professional)</option>
                    </select>
                    <select {...register("currentStatus", { required: true })} onChange={(e) => {
                        if (e.target.value === "School Student") {
                            // Handle additional input for grade
                        } else if (e.target.value === "College Student") {
                            // Handle additional input for year
                        } else if (e.target.value === "Professional") {
                            // Handle additional input for years of experience
                        }
                    }} className="w-full p-2 border rounded">
                        <option value="">Select Current Status</option>
                        <option value="School Student">School Student</option>
                        <option value="College Student">College Student</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Professional">Professional</option>
                    </select>
                    <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-blue-500 text-text p-2 rounded"
                    >
                        Next
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Career Goals and Interests</h2>
                    <input
                        {...register("dreamCareer", { required: true })}
                        placeholder="What is your dream career?"
                        className="w-full p-2 border rounded"
                    />
                    <Controller
                        control={control}
                        name="interests"
                        render={({ field }) => (
                            <select multiple {...field} className="w-full p-2 border rounded">
                                <option value="Tech">Tech</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Finance">Finance</option>
                                <option value="Arts">Arts</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Business">Business</option>
                            </select>
                        )}
                    />
                    <Controller
                        control={control}
                        name="skills"
                        render={({ field }) => (
                            <input
                                {...field}
                                placeholder="Skills you want to learn (comma separated)"
                                className="w-full p-2 border rounded"
                            />
                        )}
                    />
                    <select {...register("learningTime", { required: true })} className="w-full p-2 border rounded">
                        <option value="">Select Learning Time</option>
                        <option value="<5 hours">&lt;5 hours</option>
                        <option value="5-10 hours">5-10 hours</option>
                        <option value="10-20 hours">10-20 hours</option>
                        <option value="20+ hours">20+ hours</option>
                    </select>
                    <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-blue-500 text-text p-2 rounded"
                    >
                        Next
                    </button>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Experience and Preferences</h2>
                    <select {...register("priorExperience", { required: true })} className="w-full p-2 border rounded">
                        <option value="">Select Prior Experience</option>
                        <option value="None">None</option>
                        <option value="Basic">Basic (Hobby/Self-taught)</option>
                        <option value="Intermediate">Intermediate (Projects/Courses)</option>
                        <option value="Advanced">Advanced (Internships/Work Experience)</option>
                    </select>
                    <textarea
                        {...register("priorExperienceDetail")}
                        placeholder="Describe your prior experience (if any)"
                        className="w-full p-2 border rounded"
                    />
                    <Controller
                        control={control}
                        name="learningStyle"
                        render={({ field }) => (
                            <select multiple {...field} className="w-full p-2 border rounded">
                                <option value="Video Tutorials">Video Tutorials</option>
                                <option value="Text-based Guides">Text-based Guides</option>
                                <option value="Interactive Coding/Projects">Interactive Coding/Projects</option>
                                <option value="Mentorship/Group Learning">Mentorship/Group Learning</option>
                            </select>
                        )}
                    />
                    <select {...register("aiMentorship", { required: true })} className="w-full p-2 border rounded">
                        <option value="">Would you like AI-powered mentorship?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="bg-blue-500 text-text p-2 rounded"
                    >
                        Next
                    </button>
                </div>
            )}

            {step === 4 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Additional Information</h2>
                    <textarea
                        {...register("careerChallenges")}
                        placeholder="What are your biggest career challenges?"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        {...register("toolsToMaster")}
                        placeholder="Any specific tools or technologies you want to master?"
                        className="w-full p-2 border rounded"
                    />
                    <select {...register("jobRecommendations", { required: true })} className="w-full p-2 border rounded">
                        <option value="">Would you like to receive job/internship recommendations?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <button type="submit" className="bg-green-500 text-text p-2 rounded">
                        Submit
                    </button>
                </div>
            )}
        </form>
    );
};

export default QuestionnaireForm;