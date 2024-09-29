-- migrate:up

-- ユーザーテーブル
CREATE TABLE users (
    id VARCHAR(26) NOT NULL COMMENT 'Supabase Authから取得するユーザーID',
    username VARCHAR(64) NOT NULL COMMENT 'ユーザー名',
    profile_image_url VARCHAR(255) COMMENT 'プロフィール画像URL',
    bio VARCHAR(160) COMMENT '自己紹介',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;

-- 習慣・目標テーブル
CREATE TABLE habits (
    id VARCHAR(26) NOT NULL COMMENT '習慣ID',
    user_id VARCHAR(26) NOT NULL COMMENT 'ユーザーID',
    name VARCHAR(100) NOT NULL COMMENT '習慣の名前',
    description TEXT COMMENT '習慣の詳細',
    start_date DATE NOT NULL COMMENT '習慣開始日',
    end_date DATE COMMENT '習慣終了日',
    reminder_time TIME COMMENT 'リマインダー設定時間',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;

-- 記録テーブル
CREATE TABLE records (
    id VARCHAR(26) NOT NULL COMMENT '記録ID',
    habit_id VARCHAR(26) NOT NULL COMMENT '習慣ID',
    user_id VARCHAR(26) NOT NULL COMMENT 'ユーザーID',
    record_date DATE NOT NULL COMMENT '記録の日付',
    comment TEXT COMMENT 'コメント',
    photo_url VARCHAR(255) COMMENT '添付された写真のURL',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (habit_id) REFERENCES habits(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;

-- 投稿テーブル
CREATE TABLE posts (
    id VARCHAR(26) NOT NULL COMMENT '投稿ID',
    record_id VARCHAR(26) NOT NULL COMMENT '記録ID',
    user_id VARCHAR(26) NOT NULL COMMENT 'ユーザーID',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (record_id) REFERENCES records(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;

-- リアクションテーブル
CREATE TABLE reactions (
    id VARCHAR(26) NOT NULL COMMENT 'リアクションID',
    post_id VARCHAR(26) NOT NULL COMMENT '投稿ID',
    user_id VARCHAR(26) NOT NULL COMMENT 'ユーザーID',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;

-- コメントテーブル
CREATE TABLE comments (
    id VARCHAR(26) NOT NULL COMMENT 'コメントID',
    post_id VARCHAR(26) NOT NULL COMMENT '投稿ID',
    user_id VARCHAR(26) NOT NULL COMMENT 'ユーザーID',
    comment_text TEXT NOT NULL COMMENT 'コメント内容',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;

-- 通知テーブル
CREATE TABLE notifications (
    id VARCHAR(26) NOT NULL COMMENT '通知ID',
    user_id VARCHAR(26) NOT NULL COMMENT '通知を受け取るユーザーID',
    actor_id VARCHAR(26) COMMENT '通知を生成したユーザーID',
    notification_type ENUM('reaction', 'comment') NOT NULL COMMENT '通知の種類',
    object_id VARCHAR(26) NOT NULL COMMENT '関連オブジェクトID',
    is_read BOOLEAN NOT NULL DEFAULT FALSE COMMENT '既読フラグ',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (actor_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_bin;

-- migrate:down

DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS reactions;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS records;
DROP TABLE IF EXISTS habits;
DROP TABLE IF EXISTS users;
