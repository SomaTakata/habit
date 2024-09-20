-- migrate:up

-- users テーブルの作成
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- todos テーブルの作成
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    done BOOLEAN NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


-- migrate:down

-- todos テーブルの削除
DROP TABLE IF EXISTS todos;

-- users テーブルの削除
DROP TABLE IF EXISTS users;