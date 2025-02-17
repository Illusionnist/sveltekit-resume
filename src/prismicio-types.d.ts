// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogpostDocumentDataSlicesSlice = ImageblockSlice | RichTextSlice;

/**
 * Content for BlogPost documents
 */
interface BlogpostDocumentData {
	/**
	 * Date field in *BlogPost*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date: prismic.DateField;

	/**
	 * Title field in *BlogPost*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Hover Image field in *BlogPost*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.hover_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	hover_image: prismic.ImageField<never>;

	/**
	 * Slice Zone field in *BlogPost*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
	 * Meta Title field in *BlogPost*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: blogpost.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *BlogPost*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: blogpost.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *BlogPost*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpost.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<BlogpostDocumentData>,
	'blogpost',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| ContentIndexSlice
	| ExperienceSlice
	| TechListSlice
	| BioSlice
	| HeroSlice
	| RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

type ProjectDocumentDataSlicesSlice = ButtonSlice | RichTextSlice | ImageblockSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
	/**
	 * Title field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Hover Image field in *Project*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.hover_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	hover_image: prismic.ImageField<never>;

	/**
	 * Date field in *Project*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date: prismic.DateField;

	/**
	 * Slice Zone field in *Project*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
	 * Meta Title field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: project.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: project.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Project*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<ProjectDocumentData>,
	'project',
	Lang
>;

/**
 * Item in *Settings → Nav Items*
 */
export interface SettingsDocumentDataNavItemsItem {
	/**
	 * link field in *Settings → Nav Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * label field in *Settings → Nav Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_items[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Name field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Nav Items field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_items[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	nav_items: prismic.GroupField<Simplify<SettingsDocumentDataNavItemsItem>>;

	/**
	 * CTA Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	cta_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * CTA Label field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_label
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	cta_label: prismic.KeyTextField;

	/**
	 * GIthub link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.github_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * Linkedin Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.linkedin_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	linkedin_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never> /**
	 * Meta Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_title
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = BlogpostDocument | PageDocument | ProjectDocument | SettingsDocument;

/**
 * Primary content in *Bio → Default → Primary*
 */
export interface BioSliceDefaultPrimary {
	/**
	 * Heading field in *Bio → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bio.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Description field in *Bio → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bio.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Button Label field in *Bio → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bio.default.primary.button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button Link field in *Bio → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bio.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

	/**
	 * Avatar field in *Bio → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bio.default.primary.avatar
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	avatar: prismic.ImageField<never>;
}

/**
 * Default variation for Bio Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BioSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Bio*
 */
type BioSliceVariation = BioSliceDefault;

/**
 * Bio Shared Slice
 *
 * - **API ID**: `bio`
 * - **Description**: Bio
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BioSlice = prismic.SharedSlice<'bio', BioSliceVariation>;

/**
 * Primary content in *Button → Default → Primary*
 */
export interface ButtonSliceDefaultPrimary {
	/**
	 * Button Label field in *Button → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: button.default.primary.button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button Link field in *Button → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: button.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ButtonSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault;

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<'button', ButtonSliceVariation>;

/**
 * Primary content in *ContentIndex → Default → Primary*
 */
export interface ContentIndexSliceDefaultPrimary {
	/**
	 * Heading field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Content Type field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.content_type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	content_type: prismic.SelectField<'Blog' | 'Project'>;

	/**
	 * Description field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * View more text field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.view_more_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	view_more_text: prismic.KeyTextField;

	/**
	 * fallback field in *ContentIndex → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: content_index.default.primary.fallback
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	fallback: prismic.ImageField<never>;
}

/**
 * Default variation for ContentIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ContentIndexSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ContentIndex*
 */
type ContentIndexSliceVariation = ContentIndexSliceDefault;

/**
 * ContentIndex Shared Slice
 *
 * - **API ID**: `content_index`
 * - **Description**: ContentIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSlice = prismic.SharedSlice<'content_index', ContentIndexSliceVariation>;

/**
 * Item in *Experience → Default → Primary → items*
 */
export interface ExperienceSliceDefaultPrimaryItemsItem {
	/**
	 * title field in *Experience → Default → Primary → items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * timefield field in *Experience → Default → Primary → items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.items[].timefield
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	timefield: prismic.KeyTextField;

	/**
	 * institution field in *Experience → Default → Primary → items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.items[].institution
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	institution: prismic.KeyTextField;

	/**
	 * description field in *Experience → Default → Primary → items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.items[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * Primary content in *Experience → Default → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
	/**
	 * Heading field in *Experience → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * items field in *Experience → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.default.primary.items[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	items: prismic.GroupField<Simplify<ExperienceSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ExperienceSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Experience*
 */
type ExperienceSliceVariation = ExperienceSliceDefault;

/**
 * Experience Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<'experience', ExperienceSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * First Name field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: First Name
	 * - **API ID Path**: hero.default.primary.first_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	first_name: prismic.KeyTextField;

	/**
	 * Last Name field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Last Name
	 * - **API ID Path**: hero.default.primary.last_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	last_name: prismic.KeyTextField;

	/**
	 * Role field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Job Role
	 * - **API ID Path**: hero.default.primary.role
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	role: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *Imageblock → Default → Primary*
 */
export interface ImageblockSliceDefaultPrimary {
	/**
	 * image field in *Imageblock → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: imageblock.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for Imageblock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageblockSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageblockSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Imageblock*
 */
type ImageblockSliceVariation = ImageblockSliceDefault;

/**
 * Imageblock Shared Slice
 *
 * - **API ID**: `imageblock`
 * - **Description**: Imageblock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageblockSlice = prismic.SharedSlice<'imageblock', ImageblockSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

/**
 * Item in *TechList → Default → Primary → Items*
 */
export interface TechListSliceDefaultPrimaryItemsItem {
	/**
	 * TechName field in *TechList → Default → Primary → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tech_list.default.primary.items[].techname
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	techname: prismic.KeyTextField;

	/**
	 * Tech Colour field in *TechList → Default → Primary → Items*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tech_list.default.primary.items[].tech_colour
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	tech_colour: prismic.ColorField;
}

/**
 * Primary content in *TechList → Default → Primary*
 */
export interface TechListSliceDefaultPrimary {
	/**
	 * Heading field in *TechList → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tech_list.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Items field in *TechList → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tech_list.default.primary.items[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	items: prismic.GroupField<Simplify<TechListSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for TechList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TechListSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *TechList*
 */
type TechListSliceVariation = TechListSliceDefault;

/**
 * TechList Shared Slice
 *
 * - **API ID**: `tech_list`
 * - **Description**: TechList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSlice = prismic.SharedSlice<'tech_list', TechListSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			BlogpostDocument,
			BlogpostDocumentData,
			BlogpostDocumentDataSlicesSlice,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			ProjectDocument,
			ProjectDocumentData,
			ProjectDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavItemsItem,
			AllDocumentTypes,
			BioSlice,
			BioSliceDefaultPrimary,
			BioSliceVariation,
			BioSliceDefault,
			ButtonSlice,
			ButtonSliceDefaultPrimary,
			ButtonSliceVariation,
			ButtonSliceDefault,
			ContentIndexSlice,
			ContentIndexSliceDefaultPrimary,
			ContentIndexSliceVariation,
			ContentIndexSliceDefault,
			ExperienceSlice,
			ExperienceSliceDefaultPrimaryItemsItem,
			ExperienceSliceDefaultPrimary,
			ExperienceSliceVariation,
			ExperienceSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			ImageblockSlice,
			ImageblockSliceDefaultPrimary,
			ImageblockSliceVariation,
			ImageblockSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault,
			TechListSlice,
			TechListSliceDefaultPrimaryItemsItem,
			TechListSliceDefaultPrimary,
			TechListSliceVariation,
			TechListSliceDefault
		};
	}
}
