// src/db/schema.ts
export const CREATE_TABLES_QUERY = `
CREATE TABLE IF NOT EXISTS books (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT NOT NULL,
    year INTEGER,
    original_language TEXT,
    cover_image TEXT,
    summary_text TEXT NOT NULL,
    file_path TEXT,
    file_format TEXT -- 'pdf' | 'epub' | 'txt' | 'mobi'
);

CREATE TABLE IF NOT EXISTS quotes (
    id TEXT PRIMARY KEY,
    book_id TEXT NOT NULL,
    quote_kurdish TEXT NOT NULL,
    quote_english TEXT NOT NULL,
    FOREIGN KEY(book_id) REFERENCES books(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reading_progress (
    book_id TEXT PRIMARY KEY,
    last_location TEXT NOT NULL,
    progress_percentage REAL DEFAULT 0.0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS highlights_notes (
    id TEXT PRIMARY KEY,
    book_id TEXT NOT NULL,
    selected_text TEXT NOT NULL,
    note_content TEXT,
    color_code TEXT DEFAULT '#YELLO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;
