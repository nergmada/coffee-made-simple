# Coffee Made Simple
## Introduction
Coffee Made Simple is an open source lightweight backend
content management system built on NodeJS.

## Why?
Coffee Made Simple started because I realised I was building a massive
chunk of the same every time I coded a new application. And that
was a backend system for managing content. So I thought why not
abstract this away and provide the kind of tools I would like to have
when developing apps.


Content is a set of Assets

Assets are different types such as

- Text
- Body Text
- Image
- Container (an array of sub content)
- etc

Coffee then serves these Contents with a restful API such that if I create say a 
Blog post content type it may look like this:

Blog Post (Content)
    Text (Title)
    Body Text (Body)
    Image (featured image)
    Container (comments)
        Text (Title)
        Body Text (Body)

This piece of Content can now be served on a restful api

www.coffeemadesimple.com/content/blogpost could return

{
    Title: 'An example blogpost',
    Body: 'Some Markdown goes here',
    Image: 'www.coffeemadesimple.com/cms-fs/imagename',
    {
        {
            Title: 'This post is awesome',
            Body: '...or is it?'
        }
    }
}
