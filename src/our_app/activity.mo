
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";

import Principal "mo:base/Principal";
import Types "./types";

module {
    type UserId = Types.UserId;
    type ActivityId = Types.ActivityId;
    type Activity = Types.Activity;

    public class ActivityLog() {

        public var activityLog: [Activity] = [];
    
        public func createOne(activityId: ActivityId, activity: Activity): () {
	    let tempActivity: [Activity] = [makeActivity(activityId, activity)];

            activityLog := Array.append<Activity>(activityLog, tempActivity);
        };

        public func getAll(): async [Activity] {
           return activityLog;
        };

        func makeActivity(activityId: ActivityId, activity: Activity): Activity {
            {
                id = activity.id;
		payer = activity.payer;
		payee = activity.payee;
                coin = activity.coin;
		reason = activity.reason;
            }
        };
    }
}