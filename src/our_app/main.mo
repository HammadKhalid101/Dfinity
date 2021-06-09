import Connectd "canister:connectd";
import Database "./database";
import Types "./types";
import Utils "./utils";

actor Backend{

    var directory: Database.Directory = Database.Directory();

    type NewUser = Types.NewUser;
    type User = Types.User;
    type UserId = Types.UserId;
    type ActivityId = Types.ActivityId;

    public func create(user: NewUser, id: UserId): async () {
        directory.createOne(id, user);
    };

    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };

    public func update(user: User): async () {
            directory.updateOne(user.id, user);
    };

    public query func get(userId: UserId): async User {
        Utils.getUser(directory, userId)
    };
    
};
