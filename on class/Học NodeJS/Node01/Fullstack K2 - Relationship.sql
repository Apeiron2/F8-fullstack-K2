CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` boolean DEFAULT true,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `phones` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `phone` varchar(15) UNIQUE NOT NULL,
  `user_id` int,
  `status` boolean DEFAULT true,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `posts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `user_id` int,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `courses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` integer DEFAULT 0,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `users_courses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `course_id` int,
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `phones` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `posts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `users_courses` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `users_courses` ADD FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);
