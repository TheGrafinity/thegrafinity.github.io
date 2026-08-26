# The Grafinity Portfolio

A free, static, GitHub Pages-ready portfolio website for Sajidul Islam Mahad.

## Folder structure

- `index.html` = page structure
- `css/style.css` = all visual styling
- `js/script.js` = easy editing area + website interactions
- `images/` = portfolio images

## How to edit your details

Open:

`js/script.js`

At the top, edit the `siteConfig` object.

You can change:
- brand name
- name
- phone
- email
- tagline
- social links
- services
- why choose me
- portfolio projects
- testimonials

## How to add a new project

1. Put the image inside `images/`.
2. Open `js/script.js`.
3. Add another object inside `portfolio`, for example:

{
  title: "New Logo Project",
  category: "Logo",
  image: "images/new-logo.jpg",
  description: "Logo design project"
}

Save and upload the updated files to GitHub.

## How to remove a project

Delete its object from the `portfolio` array in `js/script.js`. You can also delete the unused image from the `images/` folder.

## How to change colors

Open `css/style.css` and edit the variables at the top:

--black
--white
--accent

## GitHub Pages

Create a public repository named:

`YOUR_GITHUB_USERNAME.github.io`

Upload all files and folders from this project.

Then go to:

Repository → Settings → Pages

Choose:

- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

Save. GitHub will publish the website at:

`https://YOUR_GITHUB_USERNAME.github.io/`
