import "./globals.css";

export const metadata = {
  title: "GrowthLoop — Agentic Composable CDP",
  description:
    "Interactive demo of the GrowthLoop composable CDP: AI Studio, Audiences, Journeys, Insights and Composable AI Decisioning.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
