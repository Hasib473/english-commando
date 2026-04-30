import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // Navbar
      "Home": "Home",
      "Methodology": "Methodology",
      "Success Stories": "Success Stories",
      "Pricing": "Pricing",
      "Login": "Login",
      "Sign Up": "Sign Up",
      // Login
      "Login": "Login",
      "Email": "Email",
      "Password": "Password",
      "Forgot Password?": "Forgot Password?",
      "Login with Google": "Login with Google",
      "Don't have an account?": "Don't have an account?",
      "Sign Up": "Sign Up",
      // SignUp
      "Sign Up": "Sign Up",
      "Name": "Name",
      "Confirm Password": "Confirm Password",
      "Passwords do not match": "Passwords do not match",
      "Sign up functionality to be implemented": "Sign up functionality to be implemented",
      "Sign up with Google": "Sign up with Google",
      "Have an account?": "Have an account?",
      "Login": "Login",
      // Add more translations as needed
    }
  },
  bn: {
    translation: {
      // Navbar
      "Home": "হোম",
      "Methodology": "পদ্ধতি",
      "Success Stories": "সাফল্যের গল্প",
      "Pricing": "মূল্য",
      "Login": "লগইন",
      "Sign Up": "সাইন আপ",
      // Login
      "Login": "লগইন",
      "Email": "ইমেইল",
      "Password": "পাসওয়ার্ড",
      "Forgot Password?": "পাসওয়ার্ড ভুলে গেছেন?",
      "Login with Google": "Google দিয়ে লগইন",
      "Don't have an account?": "অ্যাকাউন্ট নেই?",
      "Sign Up": "সাইন আপ করুন",
      // SignUp
      "Sign Up": "সাইন আপ",
      "Name": "নাম",
      "Confirm Password": "পাসওয়ার্ড নিশ্চিত করুন",
      "Passwords do not match": "পাসওয়ার্ড মিলছে না",
      "Sign up functionality to be implemented": "সাইন আপ ফাংশনালিটি ইমপ্লিমেন্ট করা হবে",
      "Sign up with Google": "Google দিয়ে সাইন আপ",
      "Have an account?": "অ্যাকাউন্ট আছে?",
      "Login": "লগইন করুন",
      // Add more translations as needed
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'bn', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;