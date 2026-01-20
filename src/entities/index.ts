/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: blogposts
 * Interface for BlogPosts
 */
export interface BlogPosts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  excerpt?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  coverImage?: string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
  /** @wixFieldType text */
  tags?: string;
}


/**
 * Collection ID: opportunities
 * Interface for Opportunities
 */
export interface Opportunities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  companyName?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  locationType?: string;
  /** @wixFieldType text */
  compensation?: string;
  /** @wixFieldType text */
  skillLevel?: string;
  /** @wixFieldType date */
  applicationDeadline?: Date | string;
  /** @wixFieldType date */
  startDate?: Date | string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  fullDetails?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  companyLogo?: string;
  /** @wixFieldType url */
  applicationLink?: string;
}


/**
 * Collection ID: opportunitycategories
 * Interface for OpportunityCategories
 */
export interface OpportunityCategories {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  categoryName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  categoryImage?: string;
  /** @wixFieldType text */
  categoryDescription?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: teammembers
 * Interface for TeamMembers
 */
export interface TeamMembers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  jobTitle?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  profilePhoto?: string;
  /** @wixFieldType url */
  linkedinUrl?: string;
  /** @wixFieldType url */
  twitterUrl?: string;
  /** @wixFieldType url */
  personalWebsiteUrl?: string;
}
