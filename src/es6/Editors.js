const Editor = require("./people/Editor")
const SheetUtils = require("./utils/SheetUtils")

class Editors {
    static async getEditorByEmail(email) {
        const data = await SheetUtils.getSheetAsJSON("Logins")
        const rows = data.filter(e => e.email == email)
        if (rows[0]) return new Editor(rows[0])
        else return null
    }

    /**
     * 
     * @param {Array.<String>} emails 
     */
    static async getEditorsByEmails(emails) {
        const data = await SheetUtils.getSheetAsJSON("Logins")
        
        return data.filter(j => emails.includes(j.email))
    }

    static async updateEditorByEmail(email, rowData) {
        SheetUtils.updateMatchingRow({ email }, rowData, "Logins")
    }
}

module.exports = Editors