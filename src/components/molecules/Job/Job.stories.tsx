import { IJob } from '@types';

import { Job } from './Job';


export default {
	title: 'molecules/Job',
	component: Job,
};

export const JobStory = (args: Omit<IJob, 'description'>) => <Job {...args} />;

JobStory.storyName = 'Job';
JobStory.args = {

	children: <div>Some body</div>,
};
