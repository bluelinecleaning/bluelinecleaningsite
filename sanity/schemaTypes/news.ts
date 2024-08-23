import { type } from "os";
import { title } from "process";

export default {
    name: 'news',
    type: 'document',
    title: 'News',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of news article'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your news article',
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title image'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}