import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export let currentProject = $state({
  projectName: '',
  projectDBID: '',
  subject: ''
});

export let currHltdLine = $state({ value: 0, prev: 0 });
export let showAboutModal = $state({ value: false });
export let currentImage = $state({src: '', bg_color: ''});
export let screenChange = $state({value: window.innerWidth});
