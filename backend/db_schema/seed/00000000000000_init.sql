-- migrate:up

-- ユーザーテーブルの仮データ
INSERT INTO users (id, username, profile_image_url, bio, created_at, updated_at) VALUES
('user1', '山田 太郎', 'https://example.com/images/taro.jpg', 'ハイキングとコーディングが大好き', NOW(), NOW()),
('user2', '佐藤 花子', 'https://example.com/images/hanako.jpg', 'フィットネスと健康に情熱を持つ', NOW(), NOW()),
('user3', '鈴木 次郎', 'https://example.com/images/jiro.jpg', 'ヨガ愛好家で猫好き', NOW(), NOW()),
('user4', '田中 三郎', 'https://example.com/images/saburo.jpg', 'テックオタクでランナー', NOW(), NOW()),
('user5', '高橋 四郎', 'https://example.com/images/shiro.jpg', '旅行と写真が趣味', NOW(), NOW());

-- 習慣テーブルの仮データ
INSERT INTO habits (id, user_id, name, description, reminder_time, created_at, updated_at) VALUES
('habit1', 'user1', '毎日のコーディング', '毎日30分のコーディング練習をする', '08:00:00', NOW(), NOW()),
('habit2', 'user2', '朝のランニング', '毎朝5kmを走る', '06:00:00', NOW(), NOW()),
('habit3', 'user3', '毎日のヨガ', '30分のヨガを行う', '07:00:00', NOW(), NOW()),
('habit4', 'user4', '夜の瞑想', '20分間の瞑想をする', '18:00:00', NOW(), NOW()),
('habit5', 'user5', '写真散歩', '1時間の散歩をして写真を撮る', '17:00:00', NOW(), NOW());

-- 記録テーブルの仮データ
INSERT INTO records (id, habit_id, user_id, record_date, comment, photo_url, created_at) VALUES
('record1', 'habit1', 'user1', '2024-01-02', '30分のコーディングを完了！', 'https://example.com/images/coding1.jpg', NOW()),
('record2', 'habit2', 'user2', '2024-01-02', '今朝の5kmランは最高でした！', 'https://example.com/images/run1.jpg', NOW()),
('record3', 'habit3', 'user3', '2024-01-02', 'ヨガでリフレッシュできました', 'https://example.com/images/yoga1.jpg', NOW()),
('record4', 'habit4', 'user4', '2024-01-02', '落ち着いた瞑想の時間でした', 'https://example.com/images/meditation1.jpg', NOW()),
('record5', 'habit5', 'user5', '2024-01-02', '素晴らしい写真が撮れました', 'https://example.com/images/photo_walk1.jpg', NOW());

-- 投稿テーブルの仮データ
INSERT INTO posts (id, record_id, user_id, created_at) VALUES
('post1', 'record1', 'user1', NOW()),
('post2', 'record2', 'user2', NOW()),
('post3', 'record3', 'user3', NOW()),
('post4', 'record4', 'user4', NOW()),
('post5', 'record5', 'user5', NOW());

-- リアクションテーブルの仮データ
INSERT INTO reactions (id, post_id, user_id, created_at) VALUES
('reaction1', 'post1', 'user2', NOW()),  -- 佐藤花子が山田太郎の投稿に「いいね」
('reaction2', 'post2', 'user3', NOW()),  -- 鈴木次郎が佐藤花子の投稿に「いいね」
('reaction3', 'post3', 'user4', NOW()),  -- 田中三郎が鈴木次郎の投稿に「いいね」
('reaction4', 'post4', 'user5', NOW()),  -- 高橋四郎が田中三郎の投稿に「いいね」
('reaction5', 'post5', 'user1', NOW());  -- 山田太郎が高橋四郎の投稿に「いいね」

-- コメントテーブルの仮データ
INSERT INTO comments (id, post_id, user_id, comment_text, created_at) VALUES
('comment1', 'post1', 'user2', '素晴らしいですね、太郎さん！', NOW()),  -- 花子が太郎の投稿にコメント
('comment2', 'post2', 'user3', 'ランニング頑張りましたね、花子さん！', NOW()),   -- 次郎が花子の投稿にコメント
('comment3', 'post3', 'user4', 'ヨガは最高ですね、次郎さん！', NOW()), -- 三郎が次郎の投稿にコメント
('comment4', 'post4', 'user5', '瞑想は大切ですよね、三郎さん！', NOW()), -- 四郎が三郎の投稿にコメント
('comment5', 'post5', 'user1', '素敵な写真ですね、四郎さん！', NOW()); -- 太郎が四郎の投稿にコメント

-- 通知テーブルの仮データ
INSERT INTO notifications (id, user_id, actor_id, notification_type, object_id, is_read, created_at) VALUES
('notification1', 'user1', 'user2', 'reaction', 'post1', FALSE, NOW()),  -- 花子から太郎への「いいね」の通知
('notification2', 'user2', 'user3', 'reaction', 'post2', FALSE, NOW()),  -- 次郎から花子への「いいね」の通知
('notification3', 'user3', 'user4', 'reaction', 'post3', FALSE, NOW()),  -- 三郎から次郎への「いいね」の通知
('notification4', 'user4', 'user5', 'reaction', 'post4', FALSE, NOW()),  -- 四郎から三郎への「いいね」の通知
('notification5', 'user5', 'user1', 'reaction', 'post5', FALSE, NOW()),  -- 太郎から四郎への「いいね」の通知
('notification6', 'user1', 'user2', 'comment', 'post1', FALSE, NOW()),   -- 花子から太郎へのコメントの通知
('notification7', 'user2', 'user3', 'comment', 'post2', FALSE, NOW()),   -- 次郎から花子へのコメントの通知
('notification8', 'user3', 'user4', 'comment', 'post3', FALSE, NOW()),   -- 三郎から次郎へのコメントの通知
('notification9', 'user4', 'user5', 'comment', 'post4', FALSE, NOW()),   -- 四郎から三郎へのコメントの通知
('notification10', 'user5', 'user1', 'comment', 'post5', FALSE, NOW());  -- 太郎から四郎へのコメントの通知

-- migrate:down
