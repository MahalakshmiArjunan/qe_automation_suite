import { Selector, t } from "testcafe";

class CompanyDetailsPage {
    pageHeader;
    constructor() {
        this.pageHeader = Selector('//h1[text()="Company details"]');
    }

    async assertCompanyDetailsPage() {
        await t.expect(this.pageHeader).ok();
    }
}

export default new CompanyDetailsPage();