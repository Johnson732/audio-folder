export interface RequestBody {
  version: string;
  input: {
    seed: number;
    width: number;
    height: number;
    prompt: string;
    scheduler: string;
    num_outputs: number;
    guidance_scale: number;
    prompt_strength: number;
    num_inference_steps: number;
  };
}

export const defaultRequestBody: RequestBody = {
  version: "ad59ca21177f9e217b9075e7300cf6e14f7e5b4505b87b9689dbd866e9768969",
  input: {
    seed: 1,
    width: 512,
    height: 512,
    prompt: "mdjrny-v4 indian princess with long hair 8k",
    scheduler: "DPMSolverMultistep",
    num_outputs: 1,
    guidance_scale: 7,
    prompt_strength: 0.8,
    num_inference_steps: 50
  }
};
