import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsMarketItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_market_items';
  info: {
    description: '';
    displayName: 'Market Item';
    icon: 'pin';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_cards';
  info: {
    description: '';
    displayName: 'Service Card';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon_name: Schema.Attribute.Enumeration<
      [
        'Search',
        'FlaskConical',
        'CircleDollarSign',
        'ShieldCheck',
        'Truck',
        'Warehouse',
        'FileText',
        'Scale',
      ]
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsWhyChooseItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_choose_items';
  info: {
    description: '';
    displayName: 'Why Choose Item';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon_name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.market-item': SectionsMarketItem;
      'sections.service-card': SectionsServiceCard;
      'sections.why-choose-item': SectionsWhyChooseItem;
    }
  }
}
