export interface BillsToReceive {
    id?: string;
    name: string;
    documentDate: Date;
    documentNumber: string;
    supplierName: string;
    amount: number;
    installmentQuantity: number;
    dueDate: Date;
}
