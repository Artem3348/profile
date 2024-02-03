<script lang="ts">
import {ref, Ref, onMounted} from "vue";

type User = {
  [key: string]: string;
};

type Link = {
  [key: string]: string;
};

interface Data {
  "user": User,
  "links": Link,
};

export function getData(filePath: string): Ref<Data | null> {
  const data = ref<Data | null>;

  onMounted(async () => {
    try {
      const response: Response = await fetch(filePath);
      const jsonData: Data = await response.json();
      data.value = jsonData;
    }
    catch (error) {
      console.error(error);
    }
  });

  return data;
}

</script>