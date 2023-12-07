export type Item = {
  code: string;
  name: string;
  itens?: Item[]; // Optional array of child items]
  description: string; // name of the product
  details?: string; // Optional description
  logoUrl?: string; // Optional URL to an image
  needChoices?: boolean; // Whether the item requires user selection
  choices?: GarnishItem[]; // Array of options to choose from
  unitPrice?: number; // Price per unit
  unitMinPrice?: number; // Minimum price
  unitOriginalPrice?: number; // Original price before discounts
  sellingOption?: {
    minimum?: number; // Minimum quantity allowed
    incremental?: number; // Quantity increment
    availableUnits?: string[]; // Allowed units (e.g., "UNIT")
  };
  productTags?: {
    group?: string; // Category of product tag
    tags?: string[]; // List of tags within the category
  }[];
  productInfo?: {
    id?: string; // Unique identifier
    quantity?: number; // Quantity of the item
    unit?: string; // Unit of measurement (e.g., "g")
  };
};

export type GarnishItem = {
  id: string;
  code: string;
  description: string;
  details?: string; // Optional additional details
  logoUrl?: string; // Optional URL to an image
  unitPrice: number; // Price per unit
};

export type Category = {
  code: string;
  itens: Item[];
  name: string;
};

export type Menu = Category[];
