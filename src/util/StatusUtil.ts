export default class StatusUtil {
    static getStatusInPtBr(abbreviation: string) {
        switch (abbreviation.toLowerCase()) {
            case 'released':
                return "Lançado";
            case null || undefined:
                return '-'
            default:
                break;
        }
    }
}