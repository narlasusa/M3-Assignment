const langCode = prompt("Enter a language code (es, de, en, fr):").toLowerCase();
  let translatedText;
  let language;

  switch (langCode) {
    case "es":
      translatedText = "Hola Mundo";
      language = "Spanish";
      break;
    case "de":
      translatedText = "Hallo Welt";
      language = "German";
      break;
    case "fr":
      translatedText = "Bonjour le monde";
      language = "French";
      break;
    case "en":
    default: // This handles the "en" case and any other unrecognized input.
      translatedText = "Hello World";
      language = "English";
      break;
  }

  // Display the final, formatted message in the console.
  // console.log(`Hello World translated in ${language} is: ${translatedText}`);
    window.alert(`Hello World translated in ${language} is: ${translatedText}`);
