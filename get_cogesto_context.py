import os
import sys
from pathlib import Path
import dspy
from attachments.dspy import Attachments

# Set up dspy with a dummy LM as we only need Attachments
lm = dspy.LM(
    model='openai/gpt-5-mini', 
    api_key=os.environ.get("OPENROUTER_API_KEY"),
    api_base="https://openrouter.ai/api/v1",
    max_tokens=16000,
    temperature=1.0
)
dspy.configure(lm=lm)

def get_cogesto_context(urls: list[str], output_path: str = "cogesto_context.txt"):
    print(f"Fetching context from Cogesto website at: {urls}")
    try:
        # Attachments will fetch the URLs and process their content
        context = Attachments(*urls)
        
        processed_text = context.text if hasattr(context, 'text') else str(context)
        
        if not processed_text or "No content extracted" in processed_text:
            print("Warning: No significant content was extracted by Attachments. Check the URLs.")
            processed_text = "No content extracted from Cogesto website."

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(processed_text)
        print(f"Successfully saved Cogesto context to {output_path}")
        return output_path
    except Exception as e:
        print(f"Error fetching Cogesto context: {e}")
        return None

if __name__ == "__main__":
    # List of Cogesto URLs to scrape for richer context
    cogesto_urls = [
        "https://www.cogestoconsulting.com/",
        "https://www.cogestoconsulting.com/a-propos/",
        "https://www.cogestoconsulting.com/notre-expertise/",
        "https://www.cogestoconsulting.com/business-linkage-progam/",
        # Add any other relevant pages here
    ]
    output_file = "cogesto_context.txt"
    get_cogesto_context(cogesto_urls, output_file)