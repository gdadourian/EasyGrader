# Data model

- Student
  - id
  - name
- Grade
  - id
  - student_id
  - assignment
  - score

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

- GET /students/<id>
```
{
    id: 1,
    name: 'John Smith',
    grades: [
        {
            assignment: 'Hw 1',
            score: '9/10'
        },
        ...
    ]
}
```

- POST /students - requires name
```
{
    id: 1,
    name: 'John Smith'
}
```

## Grades

- POST /grades - requires student_id, assignment, score
```
{
    assignment: 'Hw 1',
    score: '9/10'
}
```