import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";

import Principal "mo:base/Principal";
import Types "./types";

module {
    type NewUser = Types.NewUser;
    type User = Types.User;
    type UserId = Types.UserId;
    type ActivityId = Types.ActivityId;

    public class Directory() {
        // Funtion to check if two userId is equal
        // Params X and y are two userId
        func isEq(x: UserId, y: UserId): Bool { x == y };

        let userTable = HashMap.HashMap<UserId, User>(1, isEq, Hash.hash);

    
    // Function to create new user
    // Param userID is the Id of new user
    // Param user is the data for new user
        public func createOne(userId: UserId, user: NewUser) {
            userTable.put(userId, makeUser(userId, user));
        };

    // Function to update user
    // Param userID is the Id of user
    // Param user is the new data of user
        public func updateOne(userId: UserId, user: User) {
            userTable.put(userId, user);
         };
    
    // Function to get user
    // Param userID is the Id of user
        public func findOne(userId: UserId): ?User {
            userTable.get(userId);
        };

    

    // Function to convert new user type to user type
    // Param userID is the Id of user
    // Param user is the data of new user
        func makeUser(userId: UserId, user: NewUser): User {
            {
                id = userId;
                username = user.username;
                coin = 1000;
                followers = [];
                activity = [];
            }
        };
    }
}