import Principal "mo:base/Principal";

module {
    public type UserId = Principal;
    public type ActivityId = Text;

    public type User = {
        id: UserId,
        username: Text,
        coin: Nat,
        followers: [UserId],
        activity: [ActivityId],
    }

       public type NewUser = {
        username: Text,
        coin: Nat,
        followers: [UserId],
        activity: [ActivityId],
    }
}