# Otumfuo Foundation - Sanity CMS Guide

This guide will help you understand and use the Sanity CMS for managing content on the Otumfuo Foundation website.

## Table of Contents

- [Getting Started](#getting-started)
- [Content Types](#content-types)
- [Managing Stories](#managing-stories)
- [Managing Board Members](#managing-board-members)
- [Managing Tags](#managing-tags)
- [Content Guidelines](#content-guidelines)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

- Node.js installed on your system
- Access to the Otumfuo Foundation Sanity project
- Basic understanding of content management systems

### Running the Sanity Studio

1. Navigate to the sanity directory:

   ```bash
   cd sanity
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and go to `http://localhost:3333`

### Authentication

You'll need to be invited to the Sanity project to access the CMS. Contact the project administrator to get access.

## Content Types

The CMS manages three main content types:

### 1. Stories

Used for blog posts, news articles, and feature stories about the foundation's work.

### 2. Board of Trustees

Manages information about board members and their roles.

### 3. Tags

Used to categorize and organize stories by themes or topics.

## Managing Stories

### Creating a New Story

1. Click on **"Stories"** in the left sidebar
2. Click **"Create"** button
3. Fill in the following fields:

#### Required Fields

- **Title**: The main headline of your story
- **Slug**: Automatically generated from the title (URL-friendly version)
- **Content**: The main body of your story

#### Optional Fields

- **Primary Banner Image**: Main image displayed with the story
- **Secondary Banner Image**: Additional banner image
- **Short Description**: Brief summary of the story
- **Additional Images**: Extra images to display below content
- **Date**: When the story was published or occurred
- **Tags**: Categories to organize the story

#### Display Options

- **Recent Story**: Toggle to show in "Recent Stories" section
- **Show in Hero Carousel**: Toggle to display in homepage carousel
- **Carousel Priority**: Number to control display order (lower = higher priority)
- **Upcoming Story**: Mark as an upcoming/planned story

### Story Content Editor

The content field supports rich text editing with:

- **Text formatting**: Bold, italic, headers, lists
- **Inline images**: Add images within the text
- **Links**: Create hyperlinks to other pages or websites

### Tips for Writing Stories

- Use clear, engaging headlines
- Include compelling images that tell the story
- Write concise descriptions for better SEO
- Use tags to help visitors find related content
- Set appropriate dates for proper chronological ordering

## Managing Board Members

### Adding a Board Member

1. Click on **"Board of Trustees"** in the sidebar
2. Click **"Create"** button
3. Fill in the fields:

- **Name**: Full name of the board member
- **Role**: Their position/title (e.g., "Chairman", "Secretary")
- **Image**: Professional photo of the member
- **Display Priority**: Number to control display order (1 = first, 2 = second, etc.)

### Tips for Board Members

- Use high-quality, professional photos
- Keep role titles consistent
- Set priority numbers to control display order
- Ensure images are well-lit and professional

## Managing Tags

### Creating Tags

1. Click on **"Tags"** in the sidebar
2. Click **"Create"** button
3. Fill in the fields:

- **Tag Name**: The category name (e.g., "Education", "Healthcare")
- **Slug**: URL-friendly version (auto-generated)
- **Description**: Brief explanation of what this tag represents
- **Order**: Number to control tag sorting (0 = first)

### Tag Best Practices

- Use consistent naming conventions
- Keep tag names short and descriptive
- Create tags for major themes and topics
- Use the order field to prioritize important tags

## Content Guidelines

### Images

- **Format**: Use JPG or PNG formats
- **Size**: Optimize images for web (under 1MB when possible)
- **Dimensions**: Banner images work best at 1200x600px or similar ratios
- **Quality**: Ensure images are clear and professional

### Text Content

- **Tone**: Professional but approachable
- **Length**: Stories should be substantial but not overwhelming
- **Structure**: Use headings and subheadings for readability
- **Proofreading**: Always review content before publishing

### SEO Considerations

- Write descriptive titles
- Include relevant keywords naturally
- Use tags to improve content discoverability
- Add meaningful descriptions to images

## Best Practices

### Content Organization

1. **Plan your content**: Think about your story structure before writing
2. **Use tags consistently**: Establish clear tagging guidelines
3. **Set priorities**: Use priority fields to control content display
4. **Regular updates**: Keep content fresh and current

### Workflow

1. **Draft content**: Create and save drafts before publishing
2. **Review process**: Have content reviewed before going live
3. **Image preparation**: Prepare and optimize images beforehand
4. **Testing**: Preview content before finalizing

### Collaboration

- Use the built-in commenting system for feedback
- Communicate changes with team members
- Document any custom processes or guidelines
- Regular content audits to maintain quality

## Troubleshooting

### Common Issues

#### Images not uploading

- Check file size (should be under 10MB)
- Ensure file format is supported (JPG, PNG, GIF)
- Try refreshing the page

#### Content not appearing on website

- Ensure content is published (not just saved as draft)
- Check if display toggles are enabled
- Verify priority settings

#### Slow loading

- Optimize image sizes before uploading
- Clear browser cache
- Check internet connection

### Getting Help

If you encounter issues:

1. Check this documentation first
2. Contact the development team
3. Use Sanity's built-in help resources
4. Check the browser console for error messages

### Useful Shortcuts

- `Ctrl/Cmd + S`: Save current document
- `Ctrl/Cmd + Z`: Undo last action
- `Ctrl/Cmd + Y`: Redo action
- `Tab`: Navigate between fields

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Content Writing Guidelines](https://www.sanity.io/guides/content-writing)
- [Image Optimization Tips](https://www.sanity.io/guides/image-optimization)

---

For technical support or questions about this CMS setup, please contact the development team.
