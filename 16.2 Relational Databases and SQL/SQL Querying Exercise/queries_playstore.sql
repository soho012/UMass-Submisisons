-- Comments in SQL Start with dash-dash --

-- 1. Find the app with an ID of 1880
SELECT * FROM analytics
WHERE id = 1880;

-- 2. Find the ID and app name for all apps last updated on August 01, 2018
SELECT id, app
FROM analytics
WHERE last_updated = '2018-08-01';

-- 3. Count the number of apps in each category
SELECT category, COUNT(*) AS num_apps
FROM analytics
GROUP BY category;

-- 4. Find the top 5 most-reviewed apps and the number of reviews
SELECT app, reviews
FROM analytics
ORDER BY reviews DESC
LIMIT 5;

-- 5. Find the app that has the most reviews with a rating >= 4.8
SELECT app, reviews, rating
FROM analytics
WHERE rating >= 4.8
ORDER BY reviews DESC
LIMIT 1;

-- 6. Find the average rating for each category, ordered from highest to lowest
SELECT category, AVG(rating) AS avg_rating
FROM analytics
GROUP BY category
ORDER BY avg_rating DESC;

-- 7. Find the name, price, and rating of the most expensive app with a rating < 3
SELECT app, price, rating
FROM analytics
WHERE rating < 3
ORDER BY price DESC
LIMIT 1;

-- 8. Find all apps with min_installs <= 50 that have a rating, ordered by highest rated first
SELECT *
FROM analytics
WHERE min_installs <= 50 AND rating IS NOT NULL
ORDER BY rating DESC;

-- 9. Find the names of all apps rated < 3 with at least 10,000 reviews
SELECT app
FROM analytics
WHERE rating < 3 AND reviews >= 10000;

-- 10. Find the top 10 most-reviewed apps that cost between $0.10 and $1.00
SELECT app, price, reviews
FROM analytics
WHERE price BETWEEN 0.10 AND 1.00
ORDER BY reviews DESC
LIMIT 10;

-- 11. Find the most out-of-date app (earliest last_updated)
SELECT *
FROM analytics
WHERE last_updated = (SELECT MIN(last_updated) FROM analytics);

-- 12. Find the most expensive app
SELECT *
FROM analytics
WHERE price = (SELECT MAX(price) FROM analytics);

-- 13. Count all the reviews in the Google Play Store
SELECT SUM(reviews) AS total_reviews
FROM analytics;

-- 14. Find all categories that have more than 300 apps
SELECT category, COUNT(*) AS num_apps
FROM analytics
GROUP BY category
HAVING COUNT(*) > 300;

-- 15. Find the app with the highest proportion of min_installs to reviews, among apps with min_installs >= 100000
SELECT app, reviews, min_installs, (min_installs::FLOAT / reviews) AS proportion
FROM analytics
WHERE min_installs >= 100000
ORDER BY proportion DESC
LIMIT 1;

-- FS1. Find the name and rating of the top rated apps in each category, among apps installed at least 50,000 times
SELECT DISTINCT ON (category) category, app, rating
FROM analytics
WHERE min_installs >= 50000
ORDER BY category, rating DESC;

-- FS2. Find all apps that have a name similar to "facebook"
SELECT *
FROM analytics
WHERE app ILIKE '%facebook%';

-- FS3. Find all apps that have more than 1 genre
SELECT *
FROM analytics
WHERE genres LIKE '%,%';

-- FS4. Find all apps that have "Education" as one of their genres
SELECT *
FROM analytics
WHERE genres ILIKE '%Education%';
