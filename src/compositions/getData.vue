<script lang="ts">
import {ref, Ref, onMounted} from "@vue/composition-api";

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

export function getData(filePath: string): Ref<Data> {
  const data = ref<Data>;

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