import type { FollowersList, FollowingList, UserEntry } from './types';

export class FileHandler {
	following: UserEntry[] = $state([]);
	followers: UserEntry[] = $state([]);
	notFollowedBack: UserEntry[] = $state([]);

	constructor() {
		console.log('FileHandler created.');
	}

	async handleOnFileUpload(event: Event, type: 'following' | 'followers') {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];

		if (!file) {
			alert('No file selected.');
			return;
		}

		if (file.type !== 'application/json') {
			alert('Please upload a valid JSON file.');
			input.value = '';
			return;
		}

		try {
			const text = await file.text();
			const json = JSON.parse(text);

			if (type === 'following') {
				// Type check
				if (typeof json !== 'object' || !Array.isArray(json.relationships_following)) {
					alert('Invalid format: expected an object with relationships_following[]');
					input.value = '';
					return;
				}

				const valid = json.relationships_following.every(this.isValidUserEntry);
				if (!valid) {
					alert('One or more entries in following JSON are invalid.');
					input.value = '';
					return;
				}

                // Success
				this.following = json.relationships_following;
			} else if (type === 'followers') {
				if (!Array.isArray(json)) {
					alert('Invalid format: expected an array of followers.');
					input.value = '';
					return;
				}

				const valid = json.every(this.isValidUserEntry);
				if (!valid) {
					alert('One or more entries in followers JSON are invalid.');
					input.value = '';
					return;
				}

                // Success
				this.followers = json;
			}
		} catch (err) {
			console.error('Error parsing file:', err);
			alert('Could not parse the JSON file.');
			input.value = '';
		}
	}

	private isValidUserEntry(entry: any): entry is UserEntry {
		return (
			typeof entry === 'object' &&
			typeof entry.title === 'string' &&
			Array.isArray(entry.media_list_data) &&
			Array.isArray(entry.string_list_data) &&
			entry.string_list_data.every(
				(item: any) =>
					typeof item.value === 'string' &&
					typeof item.href === 'string' &&
					typeof item.timestamp === 'number'
			)
		);
	}

	generateFollowingNotFollowedBack() {
		this.notFollowedBack = this.following.filter((following) => {
			const username = following.string_list_data[0]?.value;
			return !this.followers.some((follower) => follower.string_list_data[0]?.value === username);
		}).sort((a, b) => a.string_list_data[0].value.localeCompare(b.string_list_data[0].value));
	}
}
