export default class LanguageUtil {
    static getLanguageInPtBr(abbreviation: string) {
        switch (abbreviation.toLowerCase()) {
            case 'en':
                return "Inglês";
            case 'ru':
                return "Russo";
            case 'de':
                return "Inglês";
            case 'it':
                return "Italiano";
            case 'fr':
                return "Francês";
            case 'pt':
                return "Português";
            case 'es':
                return "Espanhol";
            case 'fr':
                return "Inglês";
            case 'zh':
                return "Mandarin";
            case 'en':
                return "Inglês";
            default:
                return abbreviation;
                break;
        }
    }
}