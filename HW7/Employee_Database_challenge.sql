--retirement_titles
SELECT A.emp_no, A.first_name, A.last_name, 
		B.title, B.from_date, B.to_date		
INTO retirement_titles
FROM employees AS A LEFT JOIN titles AS B
ON A.emp_no = B.emp_no
WHERE (A.birth_date between '1952-01-01' AND '1955-12-31')

--unique_titles
SELECT DISTINCT ON (emp_no) emp_no, first_name, last_name, title
INTO unique_titles
FROM retirement_titles
ORDER BY emp_no, to_date DESC;

--retiring_titles_1
SELECT COUNT(title) AS count, title
INTO retiring_titles
FROM unique_titles
GROUP BY title
ORDER BY count DESC;

--retiring_titles_2
SELECT COUNT(B.title) AS count, B.title
INTO retiring_titles
FROM (SELECT DISTINCT ON (A.emp_no) A.emp_no, A.first_name, A.last_name, A.title
		FROM retirement_titles as A
		ORDER BY emp_no, to_date DESC
	 )AS B
GROUP BY B.title
ORDER BY count DESC;

--mentorship_eligibilty
SELECT DISTINCT ON (emp_no) A.emp_no, A.first_name, A.last_name, A.birth_date,
		B.from_date, B.to_date,
		C.title
INTO mentorship_eligibilty
FROM employees AS A 
LEFT JOIN dept_emp AS B ON A.emp_no = B.emp_no
LEFT JOIN titles AS C ON A.emp_no = C.emp_no
WHERE (A.birth_date between '1965-01-01' AND '1965-12-31') AND
		(B.to_date = '9999-01-01')
ORDER BY emp_no, to_date DESC;

