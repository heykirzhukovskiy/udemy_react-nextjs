export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export interface TopPageAdvantage {
	_id: string
	description: string
	title: string
}

export interface HhData {
	_id: string
	count: number
	juniorSalary: number
	middleSalary: number
	seniorSalary: number
	updatedAt: Date
}

export interface TopPageModel {
	__v: number
	_id: string
	addresses: any[]
	advantages: TopPageAdvantage[]
	alias: string
	category: string
	categoryOn: string
	createdAt: Date
	firstCategory: TopLevelCategory
	hh?: HhData
	metaDescription: string
	metaTitle: string
	qas: any[]
	secondCategory: string
	seoText: string
	tags: string[]
	tagsTitle: string
	title: string
	updatedAt: Date
}
