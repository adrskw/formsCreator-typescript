export { LocStorage, DocumentList }

interface IStorage {
    saveDocument(formValues : {[key: string]: string}) : string,
    loadDocument(documentId : string) : {[key: string]: string},
    getDocuments() : string[]
}

class LocStorage implements IStorage {
    saveDocument(formValues: { [key: string]: string; }): string {
        const documentId : string = "document-" + Date.now();
        this.addDocumentIdToDocumentsList(documentId);

        localStorage.setItem(documentId, JSON.stringify(formValues));

        return documentId;
    }
    loadDocument(documentId: string): { [key: string]: string; } {
        const doc : { [key: string]: string; } = JSON.parse(localStorage.getItem(documentId)!);

        return doc;
    }
    getDocuments(): string[] {
        const documentsListJson = localStorage.getItem("documentsList");
        let documentsList : string[] = [];
 
        if (documentsListJson !== null) {
            documentsList = JSON.parse(documentsListJson);
        }

        return documentsList;
    }

    private addDocumentIdToDocumentsList(documentId : string) : void {
        const documentsList = localStorage.getItem("documentsList");
        let documents : string[] = [];

        if (documentsList !== null) {
            documents = JSON.parse(documentsList);
        }

        documents.push(documentId);

        localStorage.setItem("documentsList", JSON.stringify(documents));
    }
}

class DocumentList {
    list : string[] = [];
    private locStorage = new LocStorage();

    getDocumentList() : void {
        this.list = this.locStorage.getDocuments();
    }

    render(parent : HTMLElement) : void {
        const table = document.createElement("table");
        const tableHeader = table.createTHead();
        tableHeader.insertRow().insertCell().innerText = "Documents:";
        const tableBody = table.createTBody();
        console.log(this.list);
        for (const documentId of this.list) {
            
            tableBody.insertRow().insertCell().innerText = documentId;
        }

        parent.appendChild(table);
    }
}