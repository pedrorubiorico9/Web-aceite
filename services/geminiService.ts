
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const generateBlogArticle = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Escribe un artículo corto (3 párrafos) y apasionante sobre el siguiente tema relacionado con el aceite de oliva: ${topic}. El tono debe ser profesional, cercano y resaltar la calidad del producto español.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Lo sentimos, no pudimos generar el artículo en este momento.";
  }
};
