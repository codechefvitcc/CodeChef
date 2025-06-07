const RecruitmentSheetLinks = {
  name: 'recruitmentSheetLinks',
  title: 'Recruitment Sheet Links',
  type: 'document',
  fields: [
    {
      name: 'recruitmentYear',
      title: 'Recruitment Year',
      type: 'string',
      description: 'e.g. 2025-26',
    },
    {
      name: 'joinUsGoogleSheet',
      title: 'Join Us Google Sheet Link',
      type: 'url',
    },
    {
      name: 'joinUsSheetBest',
      title: 'Join Us Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'contactUsGoogleSheet',
      title: 'Contact Us Google Sheet Link',
      type: 'url',
    },
    {
      name: 'contactUsSheetBest',
      title: 'Contact Us Sheet.best API Link',
      type: 'url',
    },
    {
      name: 'whatsAppGroupLinks',
      title: 'WhatsApp Group Links',
      type: 'object',
      fields: [
        {
          name: 'management',
          title: 'Management',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'design',
          title: 'Design',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'competitive_programming',
          title: 'Competitive Programming',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'social_media_and_content',
          title: 'Social Media and Content',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'marketing_and_outreach',
          title: 'Marketing and Outreach',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'web_development',
          title: 'Web Development',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'finance',
          title: 'Finance',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
        {
          name: 'projects',
          title: 'Projects',
          type: 'object',
          fields: [
            {name: 'url', title: 'Link', type: 'url'},
            {name: 'needRecruits', title: 'Need Recruits', type: 'boolean'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      year: 'recruitmentYear',
    },
    prepare({year}) {
      return {
        title: `Recruitments ${year || 'Year not set'}`,
      }
    },
  },
}

export default RecruitmentSheetLinks
