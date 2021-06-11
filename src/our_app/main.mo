import Activity "./activity";
import Database "./database";
import Types "./types";
import Utils "./utils";

actor Backend{

    var directory: Database.Directory = Database.Directory();
    var activities: Activity.ActivityLog = Activity.ActivityLog();
    var global_activity_counter: Nat = 0;

    type NewUser = Types.NewUser;
    type User = Types.User;
    type UserId = Types.UserId;
    type ActivityId = Types.ActivityId;
    type Activity = Types.Activity;

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

    public func getActivities(): async [Activity] {
        await activities.getAll()
    };

    public func transferCoin(fromUserId: UserId, toUserId: UserId, amount: Nat, reason: Text): async User {
        // Return sender user if successful, otherwise return False
        var from: User = Utils.getUser(directory, fromUserId); 
        var toUser: User = Utils.getUser(directory, toUserId);
        var allowance: Nat = from.coin;

        var balanceAfterTx: Nat = allowance - amount;

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

        global_activity_counter+=1;
        activities.createOne(global_activity_counter, {
            id = global_activity_counter;
            payer = fromUserId;
            payee = toUserId;
            coin = amount;
            reason = reason;
        });
       
        return Utils.getUser(directory, fromUserId);
    }

};
