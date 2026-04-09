import Vapi from "@vapi-ai/web";

const vapi = new Vapi(import.meta.env.VITE_VAPI_KEY);

export const startInterview = (assistantId: string) => {
  vapi.start(assistantId);
};

export const stopInterview = () => {
  vapi.stop();
};

export default vapi;
