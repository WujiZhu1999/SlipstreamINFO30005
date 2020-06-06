import Vue from 'vue';
import Form from '@/components/Form';
import DatePickerPlugin from '@/components/datePickerPlugin/index.js';
import { Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import {
	Tabbar,
	TabbarItem,
	Field,
	Button,
	Toast,
	Icon,
	RadioGroup,
	List,
	Radio,
	Progress,
	Loading,
	CellGroup,
	Search,
	Panel,
	Dialog,
	Tag,
	Cell,
	PullRefresh,
	Uploader,
	Tab,
	Tabs,
} from 'vant';
Vue.component('h-form', Form);
Toast.allowMultiple();
Toast.setDefaultOptions('loading', { forbidClick: true });
Locale.use('en-US', enUS);
Vue.use(DatePickerPlugin)
	.use(Field)
	.use(Button)
	.use(Toast)
	.use(Icon)
	.use(RadioGroup)
	.use(Radio)
	.use(Progress)
	.use(Loading)
	.use(CellGroup)
	.use(Search)
	.use(Panel)
	.use(Dialog)
	.use(List)
	.use(Tabbar)
	.use(TabbarItem)
	.use(Tag)
	.use(Cell)
	.use(PullRefresh)
	.use(Uploader)
	.use(Tab)
	.use(Tabs);
