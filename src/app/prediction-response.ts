export interface PredictionResponse {
  id: string;
  model: string;
  version: string;
  input: {
      guidance_scale: number;
      height: number;
      num_inference_steps: number;
      num_outputs: number;
      prompt: string;
      prompt_strength: number;
      scheduler: string;
      seed: number;
      width: number;
  };
  logs: string;
  output: any[];
  error: null | string;
  status: string;
  created_at: string;
  started_at: string;
  completed_at: string;
  urls: {
      cancel: string;
      get: string;
  };
  metrics: {
      predict_time: number;
  };
}
// export interface PredictionResponse {
//   id: string;
//   model: string;
//   version: string;
//   input: {
//     guidance_scale: number;
//     height: number;
//     num_inference_steps: number;
//     num_outputs: number;
//     prompt: string;
//     prompt_strength?: number; // Optional field
//     scheduler?: string; // Optional field
//     seed?: number; // Optional field
//     width: number;
//   };
//   logs: string;
//   output: string[];
//   error: any; // Adjust based on the actual structure
//   status: string;
//   created_at: string;
//   started_at?: string; // Optional field
//   completed_at?: string; // Optional field
//   urls: {
//     cancel: string;
//     get: string;
//   };
//   metrics?: { predict_time: number }; // Optional field
// }
