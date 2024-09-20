-- migrate:up

-- users テーブルにデータを挿入
INSERT INTO users (name) VALUES
    ('Alice'),
    ('Bob'),
    ('Charlie');

-- todos テーブルにデータを挿入
INSERT INTO todos (text, done, user_id) VALUES
    ('Buy groceries', false, 1),  -- Alice の ToDo
    ('Clean the house', true, 1), -- Alice の ToDo
    ('Finish homework', false, 2), -- Bob の ToDo
    ('Call mom', true, 2),        -- Bob の ToDo
    ('Go for a run', false, 3);   -- Charlie の ToDo
    
-- migrate:down
