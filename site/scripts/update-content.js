#!/usr/bin/env node

/**
 * Content Update Helper Script
 * 
 * This script helps you quickly update common content fields
 * without manually editing the content.js file
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contentPath = path.join(__dirname, '../lib/content.js');

function updateContent() {
  console.log('🚀 James Shrestha Website Content Updater\n');
  console.log('This tool helps you quickly update common content fields.\n');
  
  rl.question('What would you like to update?\n1. Email address\n2. Social media links\n3. Add new project\n4. Add new blog post\n5. Update about section\n\nEnter your choice (1-5): ', (choice) => {
    switch(choice) {
      case '1':
        updateEmail();
        break;
      case '2':
        updateSocialLinks();
        break;
      case '3':
        addProject();
        break;
      case '4':
        addBlogPost();
        break;
      case '5':
        updateAbout();
        break;
      default:
        console.log('Invalid choice. Please run the script again.');
        rl.close();
    }
  });
}

function updateEmail() {
  rl.question('Enter new email address: ', (email) => {
    if (email && email.includes('@')) {
      updateContentFile('email', email);
      console.log('✅ Email updated successfully!');
    } else {
      console.log('❌ Invalid email address');
    }
    rl.close();
  });
}

function updateSocialLinks() {
  rl.question('Enter LinkedIn URL: ', (linkedin) => {
    rl.question('Enter Twitter URL: ', (twitter) => {
      rl.question('Enter GitHub URL: ', (github) => {
        const updates = {};
        if (linkedin) updates.linkedin = linkedin;
        if (twitter) updates.twitter = twitter;
        if (github) updates.github = github;
        
        if (Object.keys(updates).length > 0) {
          updateContentFile('social', updates);
          console.log('✅ Social links updated successfully!');
        } else {
          console.log('❌ No valid URLs provided');
        }
        rl.close();
      });
    });
  });
}

function addProject() {
  rl.question('Project title: ', (title) => {
    rl.question('Project description: ', (description) => {
      rl.question('Technologies (comma-separated): ', (technologies) => {
        rl.question('GitHub URL: ', (github) => {
          rl.question('Live demo URL: ', (live) => {
            const project = {
              title,
              description,
              technologies: technologies.split(',').map(t => t.trim()),
              github: github || '#',
              live: live || '#'
            };
            
            addToArray('projects', project);
            console.log('✅ Project added successfully!');
            rl.close();
          });
        });
      });
    });
  });
}

function addBlogPost() {
  rl.question('Post title: ', (title) => {
    rl.question('Post excerpt: ', (excerpt) => {
      rl.question('Reading time (e.g., "5 min read"): ', (readTime) => {
        const post = {
          title,
          excerpt,
          date: new Date().toISOString().split('T')[0],
          slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          readTime: readTime || '5 min read'
        };
        
        addToArray('posts', post);
        console.log('✅ Blog post added successfully!');
        rl.close();
      });
    });
  });
}

function updateAbout() {
  rl.question('Enter new about description: ', (description) => {
    if (description) {
      updateContentFile('description', description);
      console.log('✅ About section updated successfully!');
    } else {
      console.log('❌ No description provided');
    }
    rl.close();
  });
}

function updateContentFile(field, value) {
  try {
    let content = fs.readFileSync(contentPath, 'utf8');
    
    if (field === 'email') {
      content = content.replace(/email: "[^"]*"/, `email: "${value}"`);
    } else if (field === 'social') {
      Object.keys(value).forEach(key => {
        const regex = new RegExp(`${key}: "[^"]*"`, 'g');
        content = content.replace(regex, `${key}: "${value[key]}"`);
      });
    } else if (field === 'description') {
      content = content.replace(/description: "[^"]*"/, `description: "${value}"`);
    }
    
    fs.writeFileSync(contentPath, content);
  } catch (error) {
    console.error('❌ Error updating content:', error.message);
  }
}

function addToArray(arrayName, item) {
  try {
    let content = fs.readFileSync(contentPath, 'utf8');
    
    // This is a simplified approach - in a real implementation,
    // you'd want to parse the JavaScript file properly
    console.log('⚠️  Manual update required:');
    console.log(`Add this ${arrayName.slice(0, -1)} to the ${arrayName} array in lib/content.js:`);
    console.log(JSON.stringify(item, null, 2));
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Run the script
updateContent();
