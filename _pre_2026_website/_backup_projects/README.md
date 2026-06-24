To recover the projects page:

- Put projects into the main folder alongside _config.yml, etc.  
- Uncomment the following:

settings.yml
```
#    - title: 'Projects'
#      url: '/projects/'
```

_config.yml

```
#  projects:
#    output: true
#    permalink: /project/:slug
```

_config.yml
```
#  - scope:
#      path: ""
#      type: "projects"
#    values:
#      layout: "project"
```

