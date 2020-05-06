[![Build Status](https://travis-ci.com/gdadourian/EasyGrader.svg?branch=master)](https://travis-ci.com/gdadourian/EasyGrader)

# Data model

- Student
  - id
  - first_name
  - last_name
- Grade
  - id
  - student_id
  - assignment
  - score_received
  - score_possible

# API


## Students

- GET /students
```
[
    {
        id: 1,
        name: 'John Smith'
    },
    ...
]
```

- POST /students - requires name
```
{
    id: 1,
    name: 'John Smith'
}
```

## Grades

- GET /grades
```
[
    {
        student_id: 1,
        assignment: 'Hw 1',
        score: '9/10'
    },
    ...
]
```

- POST /grades - requires student_id, assignment, score
```
{
    assignment: 'Hw 1',
    score: '9/10'
}
```