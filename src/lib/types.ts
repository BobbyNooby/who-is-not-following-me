export type UserEntry = {
	title: string;
	media_list_data: [];
	string_list_data: {
		href: string;
		value: string;
		timestamp: number;
	}[];
};


export type FollowersList = UserEntry[];
export type FollowingList = { relationships_following: UserEntry[] };
