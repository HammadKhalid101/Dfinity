import Database "./database";
import Types "./types";

module {

    type NewUser = Types.NewUser;
    type User = Types.User;
    type UserId = Types.UserId;
    type ActivityId = Types.ActivityId;

    public func getUser(directory: Database.Directory, userId: UserId): User {
        let existing = directory.findOne(userId);
        switch (existing) {
            case (?existing) { existing };
            case (null) {
                id = userId,
                username = "",
                coin = 1000,
                followers = [],
                activity = [],
            }
        }
    }

    public func hasAccess(userId: UserId, user: User): Bool {
    userId == user.id
  };
}