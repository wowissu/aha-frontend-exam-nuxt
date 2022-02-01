<script lang="ts" setup>
import { Follower } from '~~/types/follower';

interface FollowerItemProps {
  follower: Follower;
}

const props = defineProps<FollowerItemProps>();

</script>

<template>
  <ListItem :avatar="props.follower.avatar" :label="props.follower.fullname" :caption="`@${props.follower.username}`">
    <template #append>
      <template v-if="props.follower.isFollowing">
        <Btn round size="xs">
          Following
        </Btn>
      </template>
      <template v-else>
        <Btn outline round size="xs">
          Follow
        </Btn>
      </template>
    </template>
  </ListItem>
</template>