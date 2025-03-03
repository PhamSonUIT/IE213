db.users.insertOne({
    "username": "user123",
    "email": "user123@example.com",
    "password": "hashed_password",
    "avatar": "avatar_url",
    "created_at": ISODate("2025-01-01T12:00:00Z")
});

db.video_types.insertOne({
    "type_name": "Education"
});

db.videos.insertOne({
    "video_name": "How to learn MongoDB",
    "thumbnail": "thumbnail_url",
    "description": "A tutorial on MongoDB",
    "views": 1000,
    "type": ObjectId("..."),
    "user": ObjectId("..."),
    "source": "video_url",
    "created_at": ISODate("2025-01-01T12:00:00Z")
});

db.comments.insertOne({
    "user": ObjectId("..."),
    "video": ObjectId("..."),
    "content": "Great video!",
    "created_at": ISODate("2025-01-02T14:00:00Z")
});

db.likes.insertOne({
    "user": ObjectId("..."),
    "video": ObjectId("..."),
    "created_at": ISODate("2025-01-03T15:00:00Z")
});

db.subscriptions.insertOne({
    "subscriber": ObjectId("..."),
    "channel": ObjectId("..."),
    "created_at": ISODate("2025-01-04T16:00:00Z")
});
