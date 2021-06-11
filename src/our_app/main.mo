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

    public query func get(userid: UserId): async User {
        Utils.getUser(directory, userid)
    };

    public query func getBalance(userid: UserId): async Nat {
        Utils.getUser(directory, userid).coin
    };

    public func transferCoin(fromUserId: UserId, toUserId: UserId, amount: Nat): async User {
        // Return sender user if successful, otherwise return False
        var from: User = Utils.getUser(directory, fromUserId); 
        var toUser: User = Utils.getUser(directory, toUserId);
        var allowance: Nat = from.coin;

        var balanceAfterTx: Nat = allowance - amount;
        // TODO: Add to activity log

        assert(balanceAfterTx >= 0);

        directory.updateOne(from.id, {
            id = from.id;
            username = from.username;
            coin = balanceAfterTx;
            followers = from.followers;
            activity = from.activity;
        });

        directory.updateOne(toUser.id, {
            id = toUser.id;
            username = toUser.username;
            coin = toUser.coin + amount;
            followers = toUser.followers;
            activity = toUser.activity;
        });
       
        return Utils.getUser(directory, fromUserId);
    }

};
